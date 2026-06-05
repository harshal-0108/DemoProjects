import { useEmployees } from "../hooks/useEmployees";

function EmployeeList() {
  const {
    data: employees,
    isLoading,
    error,
  } = useEmployees();

  if (isLoading) {
    return <h2>Loading Employees...</h2>;
  }

  if (error) {
    return <h2>Error Loading Employees</h2>;
  }

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-4">
        Employee List
      </h2>

      {employees?.length > 0 ? (
        employees.map((employee) => (
          <div
            key={employee.id}
            className="border p-3 rounded mb-2"
          >
            <h3 className="font-semibold">
              {employee.name}
            </h3>

            <p>{employee.email}</p>
          </div>
        ))
      ) : (
        <p>No employee data found</p>
      )}
    </div>
  );
}

export default EmployeeList;