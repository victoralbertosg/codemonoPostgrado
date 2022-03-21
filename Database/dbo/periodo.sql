USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.periodo_READ') IS NOT NULL DROP PROCEDURE [dbo].[periodo_READ]
	IF OBJECT_ID('dbo.periodo_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[periodo_CREATE]
	IF OBJECT_ID('dbo.periodo_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[periodo_UPDATE]
	IF OBJECT_ID('dbo.periodo_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[periodo_DELETE]
*/

CREATE PROCEDURE [dbo].[periodo_READ]
	@Option      TINYINT = NULL,
	@id_periodo  INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_periodo, a.periodo, a.descripcion, a.estado
		FROM 	[dbo].[periodo] a
		WHERE 	(@id_periodo  IS NULL OR a.id_periodo = @id_periodo)
	END

	-- EXEC [dbo].[periodo_READ] @Option = null, @id_periodo = null
END
GO


CREATE PROCEDURE [dbo].[periodo_CREATE]
	@Option      TINYINT = NULL,
	@periodo     NCHAR(10),
	@descripcion NCHAR(50),
	@estado      INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_periodo INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[periodo] (periodo, descripcion, estado)
							VALUES (@periodo, @descripcion, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_periodo = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_periodo id_periodo
	-- EXEC [dbo].[periodo_CREATE] @Option = null, @periodo = null, @descripcion = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[periodo_UPDATE]
	@Option      TINYINT = NULL,
	@id_periodo  INT,
	@periodo     NCHAR(10),
	@descripcion NCHAR(50),
	@estado      INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[periodo] WHERE id_periodo = @id_periodo)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[periodo]
			SET 	periodo     = @periodo,
					descripcion = @descripcion,
					estado      = @estado
			WHERE 	id_periodo = @id_periodo

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_periodo id_periodo
	-- EXEC [dbo].[periodo_UPDATE] @Option = null, @id_periodo = null, @periodo = null, @descripcion = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[periodo_DELETE]
	@id_periodo INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[periodo] WHERE id_periodo = @id_periodo)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[periodo]
		WHERE  id_periodo = @id_periodo

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_periodo id_periodo
	-- EXEC [dbo].[periodo_DELETE] @id_periodo = null
END
GO


