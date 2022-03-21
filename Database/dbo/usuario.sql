USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.usuario_READ') IS NOT NULL DROP PROCEDURE [dbo].[usuario_READ]
	IF OBJECT_ID('dbo.usuario_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[usuario_CREATE]
	IF OBJECT_ID('dbo.usuario_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[usuario_UPDATE]
	IF OBJECT_ID('dbo.usuario_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[usuario_DELETE]
*/

CREATE PROCEDURE [dbo].[usuario_READ]
	@Option     TINYINT = NULL,
	@id_usuario INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_usuario, a.nombre, a.apellido, a.email, a.dni, 
				a.id_rol, a.ciclo, a.password, a.estado
		FROM 	[dbo].[usuario] a
		WHERE 	(@id_usuario IS NULL OR a.id_usuario = @id_usuario)
	END

	-- EXEC [dbo].[usuario_READ] @Option = null, @id_usuario = null
END
GO


CREATE PROCEDURE [dbo].[usuario_CREATE]
	@Option    TINYINT = NULL,
	@nombre    NCHAR(35),
	@apellido  NCHAR(35),
	@email     NCHAR(80),
	@dni       INT,
	@id_rol    INT,
	@ciclo     INT,
	@password  NCHAR(25),
	@estado    INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_usuario INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[usuario] (nombre, apellido, email, dni, id_rol,
								ciclo, password, estado)
							VALUES (@nombre, @apellido, @email, @dni, @id_rol,
								@ciclo, @password, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_usuario = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_usuario id_usuario
	-- EXEC [dbo].[usuario_CREATE] @Option = null, @nombre = null, @apellido = null, @email = null, @dni = null, @id_rol = null, @ciclo = null, @password = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[usuario_UPDATE]
	@Option     TINYINT = NULL,
	@id_usuario INT,
	@nombre     NCHAR(35),
	@apellido   NCHAR(35),
	@email      NCHAR(80),
	@dni        INT,
	@id_rol     INT,
	@ciclo      INT,
	@password   NCHAR(25),
	@estado     INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	
	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			IF NOT EXISTS(SELECT 1 FROM [dbo].[usuario] WHERE id_usuario = @id_usuario)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[usuario]
			SET 	nombre     = @nombre,
					apellido   = @apellido,
					email      = @email,
					dni        = @dni,
					id_rol     = @id_rol,
					ciclo      = @ciclo,
					password   = @password,
					estado     = @estado
			WHERE 	id_usuario = @id_usuario

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_usuario id_usuario
	-- EXEC [dbo].[usuario_UPDATE] @Option = null, @id_usuario = null, @nombre = null, @apellido = null, @email = null, @dni = null, @id_rol = null, @ciclo = null, @password = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[usuario_DELETE]
	@id_usuario INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[usuario] WHERE id_usuario = @id_usuario)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[usuario]
		WHERE  id_usuario = @id_usuario

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_usuario id_usuario
	-- EXEC [dbo].[usuario_DELETE] @id_usuario = null
END
GO


