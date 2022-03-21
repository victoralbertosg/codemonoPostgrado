USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.role_READ') IS NOT NULL DROP PROCEDURE [dbo].[role_READ]
	IF OBJECT_ID('dbo.role_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[role_CREATE]
	IF OBJECT_ID('dbo.role_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[role_UPDATE]
	IF OBJECT_ID('dbo.role_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[role_DELETE]
*/

CREATE PROCEDURE [dbo].[role_READ]
	@Option      TINYINT = NULL,
	@id_role     INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_role, a.descripcion
		FROM 	[dbo].[role] a
		WHERE 	(@id_role     IS NULL OR a.id_role = @id_role)
	END

	-- EXEC [dbo].[role_READ] @Option = null, @id_role = null
END
GO


CREATE PROCEDURE [dbo].[role_CREATE]
	@Option      TINYINT = NULL,
	@descripcion NCHAR(35)
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_role INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[role] (descripcion)
							VALUES (@descripcion)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_role = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_role id_role
	-- EXEC [dbo].[role_CREATE] @Option = null, @descripcion = null
END
GO


CREATE PROCEDURE [dbo].[role_UPDATE]
	@Option      TINYINT = NULL,
	@id_role     INT,
	@descripcion NCHAR(35)
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[role] WHERE id_role = @id_role)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[role]
			SET 	descripcion = @descripcion
			WHERE 	id_role = @id_role

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_role id_role
	-- EXEC [dbo].[role_UPDATE] @Option = null, @id_role = null, @descripcion = null
END
GO


CREATE PROCEDURE [dbo].[role_DELETE]
	@id_role INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[role] WHERE id_role = @id_role)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[role]
		WHERE  id_role = @id_role

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_role id_role
	-- EXEC [dbo].[role_DELETE] @id_role = null
END
GO


